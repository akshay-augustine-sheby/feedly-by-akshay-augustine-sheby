import React, { useState } from "react"
import { Modal,Button,Typography,Input } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import axios from 'axios'
import { setNestedObjectValues } from "formik";
const Subscribe = ({
    showModalExtraSmall,
    setShowModalExtraSmall

}) => {
    const [value, setValue] = useState('')
    const handleSubscribe = () => {
        setShowModalExtraSmall(false)
        axios.post('https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',value)
            .then((response)=>console.log(response))
            .catch((error)=> console.log(error))
        setValue('')
    }
    return(
<div>
    <Modal
        isOpen={showModalExtraSmall}
        onClose={() => setShowModalExtraSmall(false)}
        size="xs"
      >
        <Modal.Header>
          <div>
          <svg width="256" height="220" viewBox="0 0 256 220" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<path d="M0 2C0 0.895429 0.895431 0 2 0H254C255.105 0 256 0.89543 256 2V220H0V2Z" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0_4:3308" transform="translate(-0.144531) scale(0.00078125 0.000909091)"/>
</pattern>
<image id="image0_4:3308" width="1650" height="1100" href="data:image/png" />
</defs>
</svg>

          </div>
          <Typography style="h2">Subscribe to Feed.ly</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            We don't spam, but, we deliver the latest news in short.
          </Typography>
          <Input
             className="mt-5"
              contentSize={0}
              id="email"
              label=""
              value={value}
              placeholder="oliver@example.com"
              size="small"
              type="email"
              onChange={(e)=>setValue(e.target.value)}
            />

        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Sign Up"
            onClick={() => handleSubscribe()}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalExtraSmall(false)}
          />
        </Modal.Footer>
    </Modal>
</div>
    )
}
export default Subscribe;
