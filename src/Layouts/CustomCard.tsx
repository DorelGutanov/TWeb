import {Card, Col, Input} from 'antd'
import { IContentModel} from "../interface/Interfaces";
import {useRootStore} from "../index";
import {observer} from "mobx-react-lite";
//CustomCard
export const CustomCard=observer(({content}:{content:IContentModel}) => {

    const {title,description,notite,changeNotes} =content
    return (

            <Card title={title} bordered={false}>
                {description}
                <Input value={notite}
                       placeholder={notite}
                       onChange={(e)=>changeNotes(e.target.value)}
                />
            </Card>


    )
}
)


