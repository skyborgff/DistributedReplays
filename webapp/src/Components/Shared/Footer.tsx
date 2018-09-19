import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {createStyles, Divider, Grid, Typography, withStyles, WithStyles} from "@material-ui/core"
import * as React from "react"
import {GITHUB_LINK} from "../../Globals"
import {LinkButton} from "./LinkButton"

type Props = WithStyles<typeof styles>

class FooterComponent extends React.PureComponent<Props> {
    public render() {
        return (
            <>
                <Divider/>
                <footer className={this.props.classes.footer}>
                    <Grid container spacing={24} justify="space-around" alignItems="center">
                        <Typography>
                            &copy; 2017-2018 Saltie Group
                        </Typography>
                        <LinkButton to={GITHUB_LINK} isExternalLink
                                    iconType="fontawesome" icon={faGithub}>
                            Github
                        </LinkButton>
                    </Grid>
                </footer>
            </>
        )
    }
}

const styles = createStyles({
    footer: {
        fontSize: "1em",
        borderWidth: "15px 0",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0)",
        padding: 12,
        backgroundColor: "rgba(255, 255, 255, 0.4)"
    }
})

export const Footer = withStyles(styles)(FooterComponent)