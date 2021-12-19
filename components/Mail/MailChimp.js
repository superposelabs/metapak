import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { makeStyles } from "@material-ui/core/styles";

const url = "https://metapak.us20.list-manage.com/subscribe/post?u=fdf4801f89fea9bbcf5212b97&amp;id=f68da285fc";

import styles from "assets/jss/nextjs-material-dashboard-pro/components/mailStyle.js";

export default function Newsletter() {

    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const emailRef = createRef(undefined)

    return (
        <div className={classes.wrapper}>
        <h2>Want to stay in the loop?</h2>
        <p>sign up for email notifications</p>
        <MailchimpSubscribe url={url} render={({ subscribe, status, message }) => {
                    switch (status) {
                        case "sending":
                            return <div className={classes.description}>Sending...</div>
                        case "success":
                            return <div className={classes.description}>Subscribed.</div>
                        case "error":
                            return (
                                        <div className={classes.description}>
                                        <div className={classes.description} dangerouslySetInnerHTML={{ __html: message }} />
                                        <form onSubmit={() => {
                                                event.preventDefault()

                                                subscribe({
                                                    EMAIL: emailRef.current.value,
                                                })
                                            }}
                                        >
                                        <input type="email" ref={emailRef} className={classes.textBox} />&nbsp;&nbsp;<input type="submit" value="subscribe" className={classes.submitButton} /></form>
                                        </div>
                                    )
                        default:
                            return (
                                <form onSubmit={() => {
                                        event.preventDefault()

                                        subscribe({
                                            EMAIL: emailRef.current.value,
                                        })
                                    }}
                                >
                                    <input type="email" ref={emailRef} className={classes.textBox} />&nbsp;&nbsp;<input type="submit" value="subscribe" className={classes.submitButton} /></form>
                            )
                    }
                }}
            />
            <br />
        </div>
    )
}
