import * as React from "react"
import { storiesOf } from "@storybook/react"
import SearchBar from './SearchBar'
import '../../../styles/main.scss'

storiesOf("Search", module)
	.add("Basic", () => <SearchBar />)