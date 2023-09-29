import React from "react";
import { MyGroupsListItem } from "./MyGroupsListItem";
import { GroupsListItem } from "./GroupsListItem";

export const GroupsList=({isLoading,groups,isUserGroup})=>
    isLoading?
    <p>Loading...</p>
    :groups.map(group=>(
        isUserGroup==='true'?
        <MyGroupsListItem key={group._id} group={group}/>:
        <GroupsListItem key={group._id} group={group}/>
    ))