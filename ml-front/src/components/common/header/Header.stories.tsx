import * as React from "react"
import { storiesOf } from "@storybook/react"
import Header from './Header'
import '../../../styles/main.scss'

storiesOf("Common", module)
	.add("Header", () => <Header  />)