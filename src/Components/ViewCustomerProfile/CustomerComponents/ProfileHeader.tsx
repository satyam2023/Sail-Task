import React from "react";
import HeaderMain from "../../HeaderForMainScreen/HeaderMain";
interface ProfileHeaderProps{
    navigationProps:any

}
const ProfileHeader:React.FC<ProfileHeaderProps>=({navigationProps}:ProfileHeaderProps)=>{
    return(<>
    <HeaderMain topheading="View Customer Profile" navigationProps={navigationProps} />
    </>);
}
export default ProfileHeader;