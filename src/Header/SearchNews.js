import React, { useEffect, useState } from "react"
import { Modal,Button,Typography,Input } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
const SearchNews = ({
    showModal,
    setShowModal
}) => {



const [searchVal,setSearchVal] = useState('')
const handleChange = (e) => {
    setSearchVal(e.target.value)
}
console.log(searchVal)

return (
  <div className="w-full">
    <Modal isOpen={showModal} onClose={() => {
        setShowModal(false)
        setSearchVal('')}}>
      <Modal.Body>
        <Input label="" size="large" value={searchVal} onChange={handleChange} placeholder="Search for an article." prefix={<i className="ri-search-line pr-2" />} />
      </Modal.Body>
    </Modal>
  </div>
);
}
export default SearchNews;