import React, { useEffect, useState } from "react"
import { Modal,Button,Typography,Input } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import Debounce from "./Debounce";
import FetchSearch from "../Components/FetchSearch";
const SearchNews = ({
    showModal,
    setShowModal
}) => {
const [searchVal,setSearchVal] = useState('')
const [debouncedValue, setDebouncedValue] = useState('');

useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchVal);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchVal]);

const handleChange = (e) => {
    setSearchVal(e.target.value)
}
console.log(`SearchVal: ${searchVal}`)
console.log(`Debounced value: ${debouncedValue}`)

return (
  <div className="w-full">
    <Modal isOpen={showModal} onClose={() => {
        setShowModal(false)
        setSearchVal('')}}>
      <Modal.Body>
        <Input label="" size="large" value={debouncedValue} onChange={handleChange} placeholder="Search for an article." prefix={<i className="ri-search-line pr-2" />} />
      </Modal.Body>
    </Modal>
    <FetchSearch debouncedValue={debouncedValue} />
  </div>
);
}
export default SearchNews;