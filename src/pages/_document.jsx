import React from 'react';
import { Document } from 'blitz'
import { ServerStyleSheet } from 'styled-components'

export default class _Document extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

<<<<<<< HEAD
            const initialProps = await Document.getInitialProps(ctx)
=======
            const initialProps = await Document.getInitialProps(ctx);
>>>>>>> 7629631 (🎉 Rewrite using blitz)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 7629631 (🎉 Rewrite using blitz)
