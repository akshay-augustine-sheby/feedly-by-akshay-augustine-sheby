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
