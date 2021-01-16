import * as React from "react"
import { storiesOf } from "@storybook/react"
import Loader from './Loader'
import '../../../styles/main.scss'

storiesOf("Common", module)
	.add('Loader', () => <Loader />)