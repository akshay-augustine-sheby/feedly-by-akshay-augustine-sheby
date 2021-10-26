import React,{useState} from "react"
import { Modal, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Check from "./Check";
const FilterClick= () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <div>
            <Button
              iconPosition="right"
              size="large"
              label="Filter"
              icon={Filter}
              onClick={() => setShowModal(true)}
              style="secondary"
               />
  
        <Modal isOpen={showModal} 
                className="h-full ml-auto"
                size="xs"
                onClose={() => setShowModal(false)}>
          <Modal.Header>
            <Typography style="h2">Filter Articles</Typography>
          </Modal.Header>
          <Modal.Body>
            <Typography style="body2" lineHeight="normal">
              Category
            </Typography>
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Checkbox
                checked
                id="checkbox_name"
                label="Trial"
                
            />
            <Button
              icon={Check}
              label="Continue"
              onClick={() => setShowModal(false)}
              size="large"
            />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowModal(false)}
              size="large"
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  export default FilterClick;