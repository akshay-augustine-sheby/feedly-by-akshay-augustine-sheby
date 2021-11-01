import React,{useEffect, useState} from "react"
import { Pane, Typography, Button } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import Check2 from "./Check";
const FilterClick= ({
    showPane,
    setShowPane,
    checkNational,
    setCheckNational,
    checkWorld,
    setCheckWorld,
    checkBusiness,
    setCheckBusiness,
    checkSports,
    setCheckSports,
    archieve,
    setArchieve
}) => {
    
    useEffect(()=>{
        setCheckNational2(checkNational)
        setCheckWorld2(checkWorld)
        setCheckBusiness2(checkBusiness)
        setCheckSports2(checkSports)
        setArchieve2(archieve)
    },[showPane])

    const [checkNational2,setCheckNational2] = useState(true)
    const [checkWorld2,setCheckWorld2] = useState(true)
    const [checkBusiness2, setCheckBusiness2] = useState(true)
    const [checkSports2, setCheckSports2] = useState(true)
    const [archieve2, setArchieve2] = useState(false)

    const handleSave=()=>{
        setShowPane(false)
        setCheckNational(checkNational2)
        setCheckWorld(checkWorld2)
        setCheckBusiness(checkBusiness2)
        setCheckSports(checkSports2)
        setArchieve(archieve2)
    }
    
    return (
      <div className="w-full">
        
  
        <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
          <Pane.Header>
            <Typography style="h2" weight="semibold">
            Filter Articles
            </Typography>
          </Pane.Header>
          <Pane.Body>
            <Typography style="body2">
            Category
            </Typography>
            <Check2    
                name="National"
                checked={checkNational2}
                onChange={e => setCheckNational2(e.target.checked)} 
            />           
            <Check2    
                name="World"
                checked={checkWorld2}
                onChange={e => setCheckWorld2(e.target.checked)} 
            />
            <Check2    
                name="Business"
                checked={checkBusiness2}
                onChange={e => setCheckBusiness2(e.target.checked)} 
            />
            <Check2    
                name="Sports"
                checked={checkSports2}
                onChange={e => setCheckSports2(e.target.checked)} 
            />
            <div className="border-t mt-5">
            <Check2    
                name="Include archived articles"
                checked={archieve2}
                onChange={e => setArchieve2(e.target.checked)} 
            />
            </div>
            
          </Pane.Body>
          <Pane.Footer className="flex items-center space-x-2">
            <Button
                iconPosition="right"
                size="large"
                label="Save Changes"
                icon={Check}
                onClick={handleSave}
                style="primary"
            />
            <Button
              style="text"
              size="large"
              label="Cancel"
              onClick={() => setShowPane(false)}
            />
          </Pane.Footer>
        </Pane>
      </div>
    );
  }
  export default FilterClick;