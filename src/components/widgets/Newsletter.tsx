import React from "react"
import { NewsletterForm, TextInput, Button } from "../elements"

function Newsletter() {
  const [newsletter, setNewsletter] = React.useState("")
  const [showMessage, setShowMessage] = React.useState(false)

  React.useEffect(() => {
    if (showMessage) {
      setTimeout(() => setShowMessage(false), 2000)
    }
  }, [showMessage])

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

      setNewsletter("")
      setShowMessage(true)
    },
    [newsletter]
  )

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        {showMessage
          ? "Thanks for subscriptions!"
          : "Subscribe to our newsletter and we’ll send you the emails of latest posts."}
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
export default Newsletter
