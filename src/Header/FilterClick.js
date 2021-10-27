import React,{useState} from "react"
import { Pane, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Check from "./Check";
const FilterClick= ({
    checkNational,
    setCheckNational,
    checkWorld,
    setCheckWorld,
    checkBusiness,
    setCheckBusiness,
    checkSports,
    setCheckSports
}) => {
    const [showPane, setShowPane] = useState(false);
    return (
      <div className="w-full">
        <div className="space-y-6">
          <div className="w-1/2 space-y-8">
            <div className="flex flex-row items-center justify-start space-x-6">
              <Button
              iconPosition="right"
              size="large"
              label="Filter"
              icon={Filter}
              onClick={() => setShowPane(true)}
              style="secondary"
               />
            </div>
          </div>
        </div>
  
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
          </Pane.Body>
          <Pane.Footer className="flex items-center space-x-2">
            <Checkbox
                checked
                id="checkbox_name"
                label="Trial"
                
            />
            <Check    
                name="National"
                checked={checkNational}
                onChange={e => {
                    setCheckNational(e.target.checked)
                }
                } 
            />
            
            <Check    
                name="World"
                checked={checkWorld}
                onChange={e => setCheckWorld(e.target.checked)} 
            />
            <Check    
                name="Business"
                checked={checkBusiness}
                onChange={e => setCheckBusiness(e.target.checked)} 
            />
            <Check    
                name="Sports"
                checked={checkSports}
                onChange={e => setCheckSports(e.target.checked)} 
            />
            <Button
              icon={Check}
              size="large"
              label="Continue"
              onClick={() => setShowPane(false)}
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