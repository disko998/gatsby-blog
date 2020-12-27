import React from "react"

import { NewsletterForm, TextInput, Button } from "./elements"

export function Newsletter() {
  const [newsletter, setNewsletter] = React.useState("")

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewsletter(e.target.value)
    },
    []
  )

  const onSubmit = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (!newsletter.trim()) return
      alert(`Subscribed with ${newsletter}!`)
      setNewsletter("")
    },
    [newsletter]
  )

  return (
    <div>
      <p>
        Subscribe to our newsletter and we’ll send you the emails of latest
        posts.
      </p>
      <NewsletterForm>
        <TextInput
          value={newsletter}
          onChange={onChange}
          placeholder="Email Address"
        />
        <Button onClick={onSubmit}>Join</Button>
      </NewsletterForm>
    </div>
  )
}
