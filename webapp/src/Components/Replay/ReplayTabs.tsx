import {Card, Tab, Tabs, withWidth} from "@material-ui/core"
import {isWidthDown, WithWidth} from "@material-ui/core/withWidth"
import * as React from "react"
import {connect} from "react-redux"
import {Replay} from "../../Models/Replay/Replay"
import {StoreState} from "../../Redux"
import {BasicStatsGrid} from "./BasicStats/BasicStatsGrid"

interface OwnProps {
    replay: Replay
}

type Props = OwnProps
    & ReturnType<typeof mapStateToProps>
    & WithWidth

type tabValue = "basicStats" | "advancedStats" | "replayViewer"

interface State {
    selectedTab: tabValue
}

class ReplayTabsComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {selectedTab: "basicStats"}
    }

    public render() {
        return (
            <Card square style={{width: "100%"}}>
                <Tabs value={this.state.selectedTab}
                      onChange={this.handleSelectTab}
                      centered
                      scrollable={isWidthDown("sm", this.props.width)}
                >
                    <Tab label="Basic Stats" value="basicStats"/>
                    {this.props.loggedInUser && this.props.loggedInUser.alpha &&
                    <>
                        <Tab label="Advanced Stats" value="advancedStats"/>
                        < Tab label="Replay Viewer" value="replayViewer"/>
                    </>
                    }
                </Tabs>
                {this.state.selectedTab === "basicStats" &&
                <BasicStatsGrid replay={this.props.replay}/>
                }
            </Card>
        )
    }

    private readonly handleSelectTab = (event: React.ChangeEvent, selectedTab: tabValue) => {
        this.setState({selectedTab})
    }
}

export const mapStateToProps = (state: StoreState) => ({
    loggedInUser: state.loggedInUser
})

export const ReplayTabs = withWidth()(connect(mapStateToProps)(ReplayTabsComponent))
