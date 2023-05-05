import React from 'react';
import db from '../../firebase';
import { collection, setDoc, doc } from "firebase/firestore";
// import { parseCookies } from 'nookies';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


export default function RegInf({ githubInf }) {
    const [name, setName] = React.useState("");
    const [educ, setEduc] = React.useState("");
    const [exp, setExp] = React.useState("");
    const [lang, setLang] = React.useState("");

    const cookies = new Cookies();

    const history = useNavigate();

    const tokenId = githubInf.localId;

    const email = githubInf.email;
    const photoUrl = githubInf.photoUrl;

    const user = {
        email,
        photoUrl,
        name,
        exp,
        educ,
        lang
    }

    const endReg = async () => {
        if(name.length < 10) {
            return null;
        } else {
            console.log("Successful ✨");
            cookies.set("tokenId", tokenId);
            try {
                const userRef = doc(collection(db, 'Users'), tokenId);
                await setDoc(userRef, { user });
                // rout
                history(`/users/${tokenId}`); // create user page
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
       <div className="square-box__reg">
            <div className="wrap_reg">
                <div className="container__inpt-reg__inf">
                    <input onChange={(e) => setName(e.target.value)} placeholder="Name" className="inpt__reg-inf" type="text" />
                    <input onChange={(e) => setEduc(e.target.value)} placeholder="Education" className="inpt__reg-inf" type="text" />
                    <input onChange={(e) => setExp(e.target.value)} placeholder="Expiriens" className="inpt__reg-inf" type="text" />
                    <input onChange={(e) => setLang(e.target.value)} placeholder="Languages" className="inpt__reg-inf" type="text" />
                    <button onClick={endReg} className="button__inpt-reg__create">Create Account</button>
                </div>
            </div>
       </div>
    )
}