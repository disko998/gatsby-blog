import React from "react"
import styled from "styled-components"
import { globalHistory } from "@reach/router"
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa"

import { __DEV__ } from "../../utils/helper"

export default function SocialShare({ title, description }) {
  const siteUrl = __DEV__
    ? `https://www.myblog.com/${title}`
    : globalHistory.location.href

  return (
    <SocialContainer>
      <h3>SHARE THIS ARTICLE</h3>

      <ul>
        <li>
          <a
            className="facebook"
            href={`https://facebook.com/sharer/sharer.php?u=${siteUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={20} />
          </a>
        </li>

        <li>
          <a
            className="twitter"
            href={`https://twitter.com/share?url=${siteUrl}&text=${title}&via=twitterHandle`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </li>

        <li>
          <a
            className="linkedin"
            href={`https://linkedin.com/shareArticle?mini=true&url=${siteUrl}&title=${title}&summary=${description}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
        </li>
      </ul>
    </SocialContainer>
  )
}

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    display: flex;
    margin-top: 20px;

    li {
      margin: 0 10px;

      a {
        padding: 10px;
        border-radius: 50%;
        background-color: ${p => p.theme.colors.light};
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${p => p.theme.colors.dark};
        transition: color 0.3s;

        &:hover {
          &.facebook {
            color: ${p => p.theme.colors.facebook};
          }

          &.twitter {
            color: ${p => p.theme.colors.twitter};
          }

          &.google {
            color: ${p => p.theme.colors.google};
          }

          &.linkedin {
            color: ${p => p.theme.colors.linkedin};
          }
        }
      }
    }
  }
`
