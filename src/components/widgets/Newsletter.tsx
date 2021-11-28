import React from "react"
import styled from "styled-components"

import { TextInput, Button } from "../elements"

function Newsletter() {
  const [newsletter, setNewsletter] = React.useState("")
  const [showMessage, setShowMessage] = React.useState(false)

  React.useEffect(() => {
    if (showMessage) {
      setTimeout(() => setShowMessage(false), 3000)
    }
  }, [showMessage])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletter(e.target.value)
  }

  const onSubmit = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (!newsletter.trim()) return

      setNewsletter("")
      setShowMessage(true)
    },
    [newsletter]
  )

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        Subscribe to our newsletter and we’ll send you the emails of latest
        posts.
      </p>
      <NewsletterForm>
        <TextInput value={newsletter} onChange={onChange} placeholder="Email" />
        <Button onClick={onSubmit}>
          {showMessage ? "Subscribed!" : "Join"}
        </Button>
      </NewsletterForm>
    </div>
  )
}

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  margin: ${p => p.theme.spacing.medium} 0;

  & > input {
    margin-right: 10px;
  }

  @media ${p => p.theme.breakpoints.mobile} {
    flex-direction: column;

    & > * {
      margin: 5px;
      width: 100%;
    }
  }
`

export default Newsletter
