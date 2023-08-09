import React,{useState} from 'react'

import './Editor.scss'

import { Box, styled } from '@mui/system';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
    height: 56vh;
    max-width: 32%;
`

function Editor({ heading,icon,color,value,onChange }) {

    const [open,setOpen] = useState(true);

    const handleChange = (editor,data,value) =>{
        onChange(value)
    }

    return (
        <Container style={open ? null : {flexGrow:0}}>
            <Header>
                <Heading>
                    <Box
                    component="span" 
                    style={{
                        background: color,
                        display: 'flex',
                        height: 20,
                        width: 20,
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        color: '#000',
                    }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                    style={{
                        alignSelf: 'center',
                        cursor: 'pointer'
                    }
                    }
                    onClick={()=>{ setOpen(prevState => !prevState)}}
                />
            </Header>
            <CodeMirror 
                className = 'controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    )
}

export default Editor