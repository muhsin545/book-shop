import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";




const Registration = ({ offer }) => {

    // console.log(offer.img)

    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {

        data.status = "pending";
        data.email = `${user?.email}`;
        fetch("https://secret-sierra-31961.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                if (result.insertedId) {
                    alert(
                        "Good job!",
                        "You Ordered This product Successfully!",
                        "success"
                    );
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="from-section py-3 ms-auto border text-primary">
                <h3 className="fw-bold text-center">Purchase This Book</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-75 border border-primary my-1 rounded-3"
                        defaultValue={user?.displayName}
                        {...register("name", { required: true })}

                    /><br />
                    <input className="w-75 border border-primary my-1 rounded-3"
                        defaultValue={user?.email}
                        {...register("email", { required: true })}
                    /><br />
                    <input className="w-75 border text-primary border-primary my-1 rounded-3"
                        defaultValue={offer?.name}
                        {...register("productName", { required: true })}

                    /><br />

                    <input className="w-75 border border-primary my-1 rounded-3" type="img" defaultValue={offer?.img}
                        {...register("img", { required: true })} /><br />
                    <input className="w-75 border border-primary my-1 rounded-3"
                        placeholder="Your Current Address"
                        {...register("address", { required: true })}

                    /><br />
                    <input className="w-75 border border-primary my-1 rounded-3"
                        placeholder="Your Number"
                        {...register("number", { required: true })}
                    />

                    <br />

                    <br />
                    <input type="submit" className="btn btn-outline-primary rounded-pill px-5 py-2" value="SUBMIT" />
                </form>
            </div>
        </div>
    );

}
export default Registration;