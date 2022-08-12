import React from "react"

type Props = {
  padding?: string
  width?: string | number
  height?: string | number
}

export default function Logo ({
  padding = 'var(--spacing-l)',
  width = 90,
  height,
}: Props) {
  return (
    <div style={{ padding, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
      <svg width={width} height={height} viewBox="0 0 90 30" fill="none">
        <title>RAEN</title>
        <path d="M3.696 24V7.2H12.792C13.896 7.2 14.872 7.432 15.72 7.896C16.568 8.344 17.24 8.968 17.736 9.768C18.248 10.552 18.504 11.448 18.504 12.456C18.504 13.48 18.232 14.408 17.688 15.24C17.16 16.056 16.448 16.712 15.552 17.208C14.656 17.688 13.664 17.928 12.576 17.928H6.744V24H3.696ZM15.624 24L10.32 16.416L13.608 15.816L19.392 24.024L15.624 24ZM6.744 15.216H12.36C12.888 15.216 13.376 15.096 13.824 14.856C14.272 14.616 14.624 14.296 14.88 13.896C15.136 13.48 15.264 13.024 15.264 12.528C15.264 12.048 15.128 11.624 14.856 11.256C14.584 10.872 14.208 10.568 13.728 10.344C13.264 10.12 12.752 10.008 12.192 10.008H6.744V15.216ZM23.7313 24L31.5073 7.2H34.7233L42.4513 24H39.1393L34.2433 13.416C34.1153 13.128 33.9793 12.816 33.8353 12.48C33.6913 12.144 33.5473 11.808 33.4033 11.472C33.2753 11.136 33.1473 10.8 33.0193 10.464C32.8913 10.112 32.7793 9.776 32.6833 9.456L33.4273 9.432C33.3153 9.784 33.1953 10.136 33.0673 10.488C32.9393 10.84 32.8033 11.184 32.6593 11.52C32.5153 11.856 32.3713 12.192 32.2273 12.528C32.0833 12.848 31.9393 13.168 31.7953 13.488L26.9233 24H23.7313ZM27.2113 20.328L28.3393 17.616H37.6753L38.3233 20.328H27.2113ZM47.6882 24V7.2H61.1042V10.032H50.7602V21.168H61.2002V24H47.6882ZM49.3202 16.8V14.016H59.8802V16.8H49.3202ZM68.0085 24V7.2H71.0085L83.1525 20.328L82.8165 20.424C82.7365 19.912 82.6645 19.392 82.6005 18.864C82.5525 18.336 82.5125 17.8 82.4805 17.256C82.4485 16.712 82.4165 16.16 82.3845 15.6C82.3685 15.04 82.3525 14.48 82.3365 13.92C82.3365 13.36 82.3365 12.8 82.3365 12.24V7.2H85.4325V24H82.3845L70.1925 11.064L70.6245 10.896C70.6725 11.344 70.7125 11.792 70.7445 12.24C70.7925 12.672 70.8405 13.112 70.8885 13.56C70.9365 13.992 70.9765 14.424 71.0085 14.856C71.0405 15.288 71.0645 15.728 71.0805 16.176C71.0965 16.624 71.1045 17.064 71.1045 17.496V24H68.0085Z" fill="white" />
      </svg>
    </div>
  )
}
