import React, { useState, useEffect } from 'react'
import './style.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CloseOutlined } from '@ant-design/icons'
import {
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TelegramShareButton,
    TelegramIcon,
    WorkplaceShareButton,
    WorkplaceIcon
} from 'react-share'
import { CopyOutlined } from '@ant-design/icons'
import copy from 'copy-to-clipboard';
const ShareModal = ({ SetShowShare, hotel }) => {

    const [url, setUrl] = useState('')
    useEffect(() => {
        setUrl(window.location.href)

    }, [])

    const copyUrl = () => {
        copy(url)
        setTimeout(() => {
            toast.success('Copied to clipboard');
        }, 300);
    }

    return (
        <div className='share_modal'>
            <ToastContainer style={{ fontSize: '2rem' }} />
            <div className="share_modal_wrapper">
                <div className="top_header"> <h3>Share link Via</h3></div>
                <div className="container">
                    <div className="share_platform_ copy_text">
                        <div className="copy" onClick={copyUrl}>
                            <CopyOutlined className='copy_icon' />
                        </div>
                        <span> Copy Url</span>
                    </div>


                    <div className="share_platform_">
                        <WhatsappShareButton
                            url={url}
                            title={hotel.hotelname}
                        >
                            <WhatsappIcon round={true} size={50} />
                        </WhatsappShareButton>
                        <span> WhatsApp</span>
                    </div>



                    <div className="share_platform_">
                        <FacebookMessengerShareButton
                            url={url}
                            title={hotel.hotelname}
                        >
                            <FacebookMessengerIcon round={true} size={50} />
                        </FacebookMessengerShareButton>
                        <span> Messenger</span>
                    </div>



                    <div className="share_platform_">
                        <TelegramShareButton
                            url={url}
                            title={hotel.hotelname}
                        >
                            <TelegramIcon round={true} size={50} />
                        </TelegramShareButton>
                        <span> Telegram</span>
                    </div>

                    <div className="share_platform_">
                        <EmailShareButton
                            url={url}
                            subject={hotel.hotelname}
                        >
                            <EmailIcon size={50} round={true} />
                        </EmailShareButton>
                        <span> Email</span>
                    </div>


                    <div className="share_platform_">
                        <WorkplaceShareButton
                            url={url}
                            title={hotel.hotelname}
                        >
                            <WorkplaceIcon round={true} size={50} />
                        </WorkplaceShareButton>
                        <span> Workplace</span>
                    </div>



                    <div className="url_div">
                        <input type='text' value={url} onChange={() => setUrl(url)} className="left_input" id='MyBox'>
                        </input>
                        <div className="right">
                            <CopyOutlined className='copy_icon' onClick={copyUrl}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h2>luxuy living</h2>
                </div>
                <div className="close_modal" onClick={() => SetShowShare(false)}><CloseOutlined /></div>
            </div>
        </div>
    )
}

export default ShareModal