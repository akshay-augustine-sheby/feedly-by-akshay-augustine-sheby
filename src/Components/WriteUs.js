import React, { useState } from "react"
import { Modal,Button,Typography,Input, Textarea } from "@bigbinary/neetoui/v2";
import axios from "axios";
const WriteUs = ({
    showModalMedium,
    setShowModalMedium
}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const handleWriteUs = () => {
        setShowModalMedium(false)
        axios.post('https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',{
            name: name,
            email: email,
            message: text
        })
            .then((response)=>console.log(response))
            .catch((error)=> console.log(error))
        setName('')
        setEmail('')
        setText('')
    }
    return(
<div>
    <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="md"
      >
        <Modal.Header>
          <Typography style="h2">Can't find what you came for?</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Write to us about which category interests you and we will fetch them for you daily, for free.
          </Typography>
          <div className="flex gap-6">
          <Input
             className="mt-5"
              contentSize={0}
              id="name"
              label="Name"
              value={name}
              placeholder="Oliver Smith"
              size="small"
              type="name"
              onChange={(e)=>setName(e.target.value)}
            />
            <Input
             className="mt-5"
              contentSize={0}
              id="email"
              label="Email"
              value={email}
              placeholder="oliver@example.com"
              size="small"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <Textarea
              label="Message"
              placeholder="Write your message here."
              value={text}
              onChange={(e)=>setText(e.target.value)}
              className="mt-7"
            />
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Submit"
            onClick={() => handleWriteUs()}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalMedium(false)}
          />
        </Modal.Footer>
    </Modal>
</div>
    )
}
export default WriteUs;
