import React,{useState} from "react"
import { Modal, Typography, Button } from "@bigbinary/neetoui/v2";
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
                size="xs"
                onClose={() => setShowModal(false)}>
          <Modal.Header>
            <Typography style="h2">They're creepy & they're kooky</Typography>
          </Modal.Header>
          <Modal.Body>
            <Typography style="body2" lineHeight="normal">
              Somewhere out in space live The Herculoids! Zok, the laser-ray
              dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
              Gleep, the formless, fearless wonders! With Zandor, their leader,
              and his wife, Tara, and son, Dorno, they team up to protect their
              planet from sinister invaders! All-strong! All-brave! All-heroes!
              They're The Herculoids!
            </Typography>
          </Modal.Body>
          <Modal.Footer className="space-x-2">
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