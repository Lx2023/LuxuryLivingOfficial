import React, {useEffect} from 'react'
// import Header from '../../components/Header/Header'
// import Social from '../../components/Social/Social'
import ComingSoon from '../../utils/ComingSoon/ComingSoon'
import './style.scss'
const ClientsForm = () => {
    // const submit = (e) => {
    //     e.preventDefault()
    // }
    useEffect(()=>{
document.title ='Luxury Living - Preference Form'
    },[])
    return (
        <ComingSoon />
        // <div className='clients_form'>
        //     <Header />
        //     <div className="clients_form_wrapper">
        //         <div className="form_head">
        //             <h2>Luxury Living - Client's Preferences Form</h2>
        //             <p>Please take a minute to fill in the below form so that we can update the hotel about the traveller's preferences. Thank You.</p>
        //         </div>
        //         <form action="" onSubmit={submit}>
        //             <div className="required_indication">
        //                 <span>*</span>
        //                 <p>required fields</p>
        //             </div>
        //             <div className="input_divs">
        //                 <label htmlFor="">Client's Name <span>*</span></label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' required />
        //                 </div>
        //             </div>
        //             <div className="input_divs">
        //                 <label htmlFor="">Hotel(s) Booked & Confirmation Number <span>*</span></label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' required />
        //                 </div>
        //             </div>

        //             <div className="checkbox_div">
        //                 <p>What is the meal preference of your client?</p>
        //                 <div className="checkboxes">
        //                     <input type="checkbox" name="" id="" />
        //                     <p>Pure Vegetarians</p>
        //                 </div>
        //                 <div className="checkboxes">
        //                     <input type="checkbox" name="" id="" />
        //                     <p>Pure Vegetarians but eat Eggs</p>
        //                 </div>
        //                 <div className="checkboxes">
        //                     <input type="checkbox" name="" id="" />
        //                     <p>Non Vegetarians</p>
        //                 </div>
        //                 <div className="checkboxes">
        //                     <input type="checkbox" name="" id="" />
        //                     <p>Non Vegetarians but don’t eat Pork</p>
        //                 </div>
        //                 <div className="checkboxes">
        //                     <input type="checkbox" name="" id="" />
        //                     <p>Jain Meals Only</p>
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Any other specific preferences with regards to food?</label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Any allergies with regards to food? </label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Are these clients a 'repeat guest' to the hotel(s) that we have booked for them? (If Yes, then please specify the Hotel's Name. If No, then leave blank)</label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Are they celebrating any special occasion on this trip? (If Yes, then please specify the occasion & the name of the person celebrating. If No, then leave blank)</label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Is there any medical condition that you would like the hotel to know about your clients beforehand? (If yes, the please specify the condition & if any precautions are to be advised. If No, then leave blank) </label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>

        //             <div className="input_divs">
        //                 <label htmlFor="">Is there anything else that you want us to take care of with regards to the clients stay? </label>
        //                 <div className="input_div">
        //                     <input type="text" placeholder='your answer' />
        //                 </div>
        //             </div>
        //             <div className="input_divs input_divs_adjust ">
        //                 <p>Thank you! We shall ensure that the hotel is updated with this information before the client’s arrival.</p>
        //                 <i>And Thank You again for trusting us with your client’s trip!</i>
        //             </div>
        //             <div className="submit_btn">
        //                 <input type="submit" value="Submit" />
        //             </div>
        //         </form>
        //     </div>
        //     <Social/>
        // </div>
    )
}

export default ClientsForm