import * as React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from './Breadcrumb'
import '../../../styles/main.scss'

storiesOf("Search", module)
	.add("Breadcrumb", () => <Breadcrumb categories={['Categoría 1', 'Categoría 2', 'Categoría 3']} />)