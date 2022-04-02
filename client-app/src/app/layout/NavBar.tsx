import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
    openForm: (id?: string) => void;
 
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
                </Menu.Item>
                <Menu.Item name='Reactivities' />
                <Menu.Item>
                    <Button positive content='Create Activity' onClick={()=> openForm()}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}