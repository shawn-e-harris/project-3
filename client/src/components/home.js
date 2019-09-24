import React from 'react';
import Container from '@material-ui/core/Container';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container fixed>
                    <h1>
                        Zeus
                    </h1>
                </Container>
                <Container fixed>
                    <h1>
                        Hades
                    </h1>
                </Container>
            </div>
        )
    }
}
