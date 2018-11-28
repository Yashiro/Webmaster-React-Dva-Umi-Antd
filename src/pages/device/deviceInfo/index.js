import React,{Component} from 'react'
import { Page } from 'components'
import { connect } from 'dva'
import {Form,Input,Button,Row,Col,Checkbox} from 'antd'
import styles from './index.less'
import router from 'umi/router'
const FormItem=Form.Item
const CheckboxGroup = Checkbox.Group;
const options = [
   '管理', '巡店', '客流', 
  ];
const { TextArea } = Input;
class DeviceInfo extends Component {
    constructor(props){
		super(props)
		this.state={
			storeId:this.props.location.query.id
		}
    }
    handleBack=()=>{
       router.goBack()
    }
    render(){
        const { getFieldDecorator } = this.props.form
		const {storeId,storeName} =this.props.device
		// const {storeId} =this.state
		const info=
		{id:10001,deviceName:'数客宝',deviceHAID:'32323213155661',type:'数客宝',deviceSize:'规格',tags:'滁州市',desc:'无',statue:true}
		
		const formItemLayout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
		}
		
    return (
        <Page inner>
       <div className={styles.contents}>
	   <div className={styles.submits}>
                <Button onClick={this.handleBack}>返回</Button>

            </div>
			<Form>
            <FormItem label="商户ID"  {...formItemLayout}>
						{getFieldDecorator('storeId', {
                            initialValue:`${storeId}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input disabled/>)}
			</FormItem>
            <FormItem label="设备名称"  {...formItemLayout}>
						{getFieldDecorator('deviceName', {
							 initialValue:`${info.deviceName}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入设备名称" disabled/>)}
			</FormItem>
            <FormItem label="设备规格"  {...formItemLayout}>
						{getFieldDecorator('deviceSize', {
                            initialValue:`${info.deviceSize}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入设备规格" disabled/>)}
			</FormItem>
            <FormItem label="设备类型"  {...formItemLayout}>
						{getFieldDecorator('type', {
                             initialValue:`${info.type}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入设备类型" disabled/>)}
			</FormItem>
            <FormItem label="设备识别码"  {...formItemLayout}>
						{getFieldDecorator('deviceHAID', {
                             initialValue:`${info.deviceHAID}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
						})(<Input placeholder="请输入设备识别码" disabled/>)}
			</FormItem>
            <FormItem label="节点权限"  {...formItemLayout}>
						{getFieldDecorator('tags', {
                             initialValue:`${info.tags}`,
							rules: [
								{
									required: true,
									whitespace: true,
								},
							],
                        })(<Input disabled/>)}
			</FormItem>
            <FormItem label="备注"  {...formItemLayout}>
						{getFieldDecorator('desc', {
                             initialValue:`${info.desc}`,
							rules: [
								{
									
								},
							],
						})(<TextArea rows={4} placeholder="有什么需要备注的吗" disabled/>)}
			</FormItem>
            </Form>
			
        </div>
        </Page>
    )
}
}
export default connect(({device})=>({device}))(Form.create()(DeviceInfo))