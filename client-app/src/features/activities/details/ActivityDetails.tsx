import React from "react";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity,
    handleCancelSelectActivity: () => void;
    openForm: (id: string) => void;
}
export default function ActivityDetails({activity, handleCancelSelectActivity, openForm}: Props) {

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                   {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button color='blue' content='Edit' onClick={()=>openForm(activity.id)}/>
                    <Button color='grey' content='Cancel' onClick={handleCancelSelectActivity}/>
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}