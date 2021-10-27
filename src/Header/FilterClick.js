import React,{useState} from "react"
import { Pane, Typography, Button,Checkbox } from "@bigbinary/neetoui/v2";
import { Filter } from "@bigbinary/neeto-icons";
import Check from "./Check";
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
    setCheckSports
}) => {
    
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
          </Pane.Body>
          <Pane.Footer className="flex items-center space-x-2">
            <Checkbox
                checked
                id="checkbox_name"
                label="Trial"
                
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