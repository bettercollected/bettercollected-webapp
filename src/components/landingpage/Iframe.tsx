import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormRenderer from "@app/components/ui/FormRenderer";
import FormInput from "@app/components/ui/FormInput";
import {useRef} from "react";

/**
 * Created By: Rupan Chaulagain
 * Date: 2022-10-21
 * Time: 14:10
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */

export default function Iframe(props:any) {
    const {handleClose} = props;

    const iframeRef = useRef(null);

    function handleIframe(e:any){
        const currentIframe = e;
        console.log("submit",e)
        if(!!currentIframe.current) {
            console.log("iframe", currentIframe.contentWindow.document.getElementsByTagName("a"))
        }
    }
    return (
        <Dialog
            PaperProps={{
                sx: {
                    width: "640",
                    maxWidth: "720px!important",
                    overflow: "hidden"
                },
            }}
            open={true}
            onClose={handleClose}>
            {/*<DialogTitle>Personal Details</DialogTitle>*/}
            <DialogContent>
                <div className={"overflow-hidden"}>
                    <iframe
                        ref={iframeRef}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc-OA5vBjBLYm2xN2ZVxDuxqqrmwSHKAqAgv6QrF1TwIWKMow/viewform?embedded=true"
                        width="640"
                        height="1900"
                        onSubmit={handleIframe}
                        scrolling={"no"}
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}>Loading…
                    </iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}