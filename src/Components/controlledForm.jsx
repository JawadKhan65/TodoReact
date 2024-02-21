
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
    return (
        <>

            <p className="FieldError text-red-500">Password should have at least 8 characters</p>
        </>
    );
};

const ControlledForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            password.value.length >= 8 &&
            role !== "role" &&
            validateEmail(email) &&
            firstName.length > 0 &&
            lastName.length > 0
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setPassword({ value: "", isTouched: false });
        setEmail("");
        setRole("role");
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Account created!");
        clearForm();
    };

    return (
        <>
            <div className="flex bg-neutral-100 justify-center flex-col items-center">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2 className="font-bold m-2">Sign Up</h2>
                        <div className="Field m-3">
                            <label className="font-semibold">
                                First name <sup className="text-red-700 font-bold">*</sup>
                            </label>
                            <input className="ml-3 float-right p-1" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="Field m-3">
                            <label className="font-semibold">Last name</label>
                            <input className="ml-3 float-right p-1" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="Field m-3">
                            <label className="font-semibold">
                                Email address <sup className="text-red-700 font-bold">*</sup>
                            </label>
                            <input className="ml-3 float-right p-1" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="Field m-3">
                            <label className="font-semibold">
                                Password <sup className="text-red-700 font-bold">*</sup>
                            </label>
                            <input className="ml-3 float-right p-1" placeholder="Password" value={password.value} onChange={(e) => {
                                setPassword({
                                    value: e.target.value,
                                    isTouched: true
                                });
                            }} />
                            {(password.isTouched && password.value.length < 8 && <PasswordErrorMessage />)}
                        </div>
                        <div className="Field m-3">
                            <label className="font-semibold">
                                Role <sup className="text-red-700 font-bold">*</sup>
                            </label>
                            <select className="ml-3 float-right p-1" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <button type="submit" disabled={!getIsFormValid()} className="m-3 bg-blue-600 text-white p-2 rounded-md font-semibold cursor-pointer hover:bg-sky-600 disabled:bg-blue-100 cursor-not-allowed">
                            Create account
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default ControlledForm;
