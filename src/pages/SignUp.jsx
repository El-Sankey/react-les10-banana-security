import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function SignUp() {
    const [email, setEmail] = useState(" ");
    const [password, setPasword] = useState(" ");
    const [usersName, setusersName] = useState(" ");

    const handelSubmit= (e) => {
        e.preventDefault();
        console.log("U moet nog registreren!")
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

        <form onSubmit={handelSubmit}>
            <label>Gebruikernaam:
                <input type="text"
                       placeholder="voer Gebruikersnaam in"
                       value={usersName}
                       onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Emailadres:
                <input type="email"
                       placeholder="voer Emailadres in"
                       value={password}
                       onChange={(e) => setPassword(e.target.valu)}
                />
            </label>
            <label>Wachtwoord:
                <input type="password"
                       placeholder="voer Wachtwoord in"
                       value={password}
                       onChange={(e) => setPassword(e.target.valu)}
                />
            </label>
            <br/>
            <button type="submit">Registreren</button>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;