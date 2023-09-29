import React from "react";
import {Link} from 'react-router-dom';
import { GroupsList } from "./GroupsList";
import { MyGroupsListItem } from "./MyGroupsListItem";
import { GroupsListItem } from "./GroupsListItem";
import {useGroups} from './useGroups';
import {useUserGroups} from './useUserGroups';

export const GroupListPage=()=>{
   const{isLoading:isLoadingAllGroups,groups:allGroups}=useGroups();
   const{isLoading:isLoadingUserGroups,userGroups}=useUserGroups();
   const isLoading=isLoadingAllGroups||isLoadingUserGroups;
   const notUserGroups=allGroups.
         filter(group=>userGroups.every(userGroup=>userGroup.id!==group.id));
    return (
        <div className="centered-container">
            <h1 className="section-heading">My Groups</h1>
            <GroupsList
                 isLoading={isLoading}
                 groups={userGroups}
                 isUserGroup='true'/>
            <h1 className="section-heading">Other Groups</h1>
            <GroupsList
                 isLoading={isLoading}
                 groups={notUserGroups}
                 isUserGroup='false'/>
            <Link to="/create-group">
                <button>Create New Group</button>
            </Link>
        </div>
   )


};