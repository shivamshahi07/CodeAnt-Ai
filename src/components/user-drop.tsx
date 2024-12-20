import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  const UserDropdown = () => {
    return (
      <div>
        <Select>
          <SelectTrigger className="w-full h-[40px]">
            <SelectValue placeholder="UtkarshDhairyaPanwar" />
          </SelectTrigger>
  
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Profile</SelectLabel>
              <SelectItem value="a">UtkarshDhairyaPanwar</SelectItem>
              <SelectItem value="b">Option A</SelectItem>
              <SelectItem value="c">Option B</SelectItem>
              <SelectItem value="d">Option C</SelectItem>
              <SelectItem value="e">Option D</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  };
  
  export default UserDropdown;