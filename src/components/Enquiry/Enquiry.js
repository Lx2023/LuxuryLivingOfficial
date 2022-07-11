import React, { useState, useEffect } from 'react'
import './enquiry.scss'
import { CloseOutlined } from '@ant-design/icons'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const Enquiry = () => {
    const [hotelName, setHotelName] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [nights, setNights] = useState('')
    const [adults, setAdults] = useState('')
    const [childCount, setChildCount] = useState('')
    const [childsAge, setChildsAge] = useState('')
    const [enquiry, setEnquiry] = useState('')

    const navigate = useNavigate()
    // const location = useLocation()

    // const id = location.pathname.split('/')[3]
    // const hotel = data[id - 1]

    const [errorField, setErrorField] = useState({
        hotelNameError: '',
        checkInDateError: '',
        nightsError: '',
        adultsError: '',
        childCountError: '',
        childsAgeError: '',
        // enquiryError: ''
    })

    useEffect(() => {
        document.title = 'Luxury Living - Enquire'
        // setHotelName(hotel)
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        if (validForm()) {
            try {
                toast.success('Enquiry Submitted Successfully');
                console.log(enquiry);
            } catch (error) {
                toast.error('Something went wrong')
            }
        } else {
            toast.error('please fill all the required fields')
            console.log(errorField);
        }
        setTimeout(() => {
            return e.target.reset()
        }, 2000);
    }

    const validForm = () => {
        setErrorField({
            hotelNameError: '',
            checkInDateError: '',
            nightsError: '',
            adultsError: '',
            childCountError: '',
            childsAgeError: ''
        })
        let formIsValid = true;
        if (hotelName === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, hotelNameError: "Please Choose hotel first"
            }))
        }
        if (checkInDate === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, checkInDateError: "Please Choose Check in date"
            }))
        }
        if (nights === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, nightsError: "Required field"
            }))
        }
        if (adults === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, adultsError: "Required field"
            }))
        }
        if (childCount === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, childCountError: "Please enter number of childrens"
            }))
        }
        if (childsAge === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, childsAgeError: "Please give childs ages"
            }))
        }
        // if (enquiry === '') {
        //     formIsValid = false;
        //     setErrorField(pre => ({
        //         ...pre, enquiryError: "If you don't have any request please write No!"
        //     }))
        // }
        return formIsValid;
    }


    return (
        <div className='enquiry_container'>
            <ToastContainer style={{ fontSize: '1.8rem' }} />
            <div className="enquiry_wrapper">
                <div className="cancel" onClick={() => navigate(-1)}><CloseOutlined /></div>
                <form action="" onSubmit={submit}>
                    <div className="header_enquiry">
                        <p>INPUT DETAILS OF YOUR REQUEST HERE...  AND WE'LL GET RIGHT BACK TO YOU!</p>
                    </div>
                    <div className="inputs_div">
                        <div className="inputs">
                            <label htmlFor="">Hotel Name :</label>
                            <input type="text" name="" id="" onChange={(e) => setHotelName(e.target.value)} />
                        </div>
                        <div className="inputs inputs_">  <label htmlFor="">Check In Date :</label>
                            <input type="date" name="" id="" onChange={(e) => setCheckInDate(e.target.value)} />
                        </div>
                        <div className="inputs inputs_">
                            <label htmlFor="">Nights :</label>
                            <input type="number" name="" id="" onChange={(e) => setNights(e.target.value)} />
                        </div>
                        <div className="inputs inputs_">
                            <label htmlFor="">Adults :</label>
                            <input type="number" name="" id="" onChange={(e) => setAdults(e.target.value)} />
                        </div>
                        <div className="inputs inputs_">
                            <label htmlFor="">Children :</label>
                            <input type="number" name="" id="" onChange={(e) => setChildCount(e.target.value)} />
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Each child's age :</label>
                            <input type="text" name="" id="" placeholder='  03 yrs / 05 yrs / 11 yrs...' onChange={(e) => setChildsAge(e.target.value)} />
                        </div>
                        <div className="textArea">
                            <label htmlFor="">Any Other Request :</label>
                            <textarea type="text" name="" id="" onChange={(e) => setEnquiry(e.target.value)}></textarea>
                        </div>
                        <div className="button">
                            <input type="submit" value="submit" className='button_' />
                        </div>
                    </div>
                </form>
                <div className="contactDiv">
                    <h2>Need It Now?</h2>
                    <h2>Call</h2>
                    <span> <a href="tel:9899699991">+91 9899699991</a></span>
                    <span><a href="tel:9711983158">+91 9711983158</a></span>
                </div>
            </div>
        </div>
    )
}

export default Enquiry