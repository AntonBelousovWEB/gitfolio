import React from 'react';
import RegGit from './RegGithub';
import RegInfRes from './RegInfRes';

import { auth, githubProvider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";

export default function Reg() {
    const [activeStep, setActiveStep] = React.useState(1);
    const [key, setKey] = React.useState(0);

    const [user, setUser] = React.useState([]);

    const nextStep = () => {
      setActiveStep(activeStep + 1);
      setKey(key + 1);
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            setUser(user.reloadUserInfo);
            nextStep();
        }).catch((error) => {
            console.error(error);
        });
    };

    const stepReg = [
        {
            step: 1,
            content: <RegGit github={signInWithGithub} />
        },
        {
            step: 2,
            content: <RegInfRes githubInf={user} />
        }
    ]

    const indexStepInf = stepReg[activeStep - 1];

    return (
        <div>
            {
                indexStepInf.content
            }
        </div>
    )
}