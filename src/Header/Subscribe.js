import React from "react"
import { Modal,Button,Typography,Input } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
const Subscribe = ({
    showModalExtraSmall,
    setShowModalExtraSmall

}) => {
    
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
              placeholder="oliver@example.com"
              size="small"
              type="email"
            />
            
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Sign Up"
            onClick={() => setShowModalExtraSmall(false)}
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
