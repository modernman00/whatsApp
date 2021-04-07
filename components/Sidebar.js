import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator"

function Sidebar() {

    const createChat = () => {
    const input = prompt('Please, enter the email address of the user you wish to chat with')

    if(!input) return null

    if(EmailValidator.validate(input)){
        // we need to add the chat into the DB chat collection
    }
};

    return (
        <Container>
            <Header>

                <UserAvatar/>

                <IconsContainer>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    
                    <IconButton>
                         <MoreVertIcon/>
                    </IconButton>
                   


                </IconsContainer>

            </Header>

            <SearchBox>
                <SearchIcon/>
                <SearchInput placeholder="Search"/>
            </SearchBox>

            <SidebarButton onclick={createChat}>
                START A NEW CHAT
            </SidebarButton>

            
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div``;

const SearchBox = styled.div`
display: flex;
padding: 20px;
align-items: center;
border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width:0;
    flex: 1;
    border: none;
    height: 40px;
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    justify-content: space-between;
    align-items:center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    z-index: 1;

`;

const SidebarButton = styled(Button)`
flex : 1;
padding: 15px;
width : 100%;

&&&{
    border-bottom: 1px whitesmoke;
border-top: 1px whitesmoke;
}

`;

const UserAvatar = styled(PersonIcon)``;

const IconsContainer = styled.div``;

