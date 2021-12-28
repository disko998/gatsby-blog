import { Text } from "components/elements/text"
import React from "react"
import styled from "styled-components"

import { TextInput, Button } from "../elements"

function Newsletter() {
  const [newsletter, setNewsletter] = React.useState("")
  const [isSubscribe, setIsSubscribe] = React.useState(false)

  //   React.useEffect(() => {
  //     if (isSubscribe) {
  //       setTimeout(() => setIsSubscribe(false), 3000)
  //     }
  //   }, [isSubscribe])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletter(e.target.value)
  }

  const onSubmit = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (!newsletter.trim()) return

      setNewsletter("")
      setIsSubscribe(true)
    },
    [newsletter]
  )

  return (
    <div>
      <Text align="center">
        Subscribe to our newsletter and we’ll send you the emails of latest
        posts.
      </Text>
      <NewsletterForm>
        {!isSubscribe && (
          <TextInput
            value={newsletter}
            onChange={onChange}
            placeholder="Email"
          />
        )}
        <Button flex={1} onClick={onSubmit} disabled={isSubscribe}>
          {isSubscribe ? "Thank you for joining!" : "Join"}
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
