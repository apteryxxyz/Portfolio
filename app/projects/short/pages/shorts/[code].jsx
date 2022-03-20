import getShort from 'app/projects/short/queries/getShort';
import clickShort from 'app/projects/short/mutations/clickShort';

export default function ShortCode() {
    return 'Loading...';
}

export async function getServerSideProps(context) {
    const code = context.query.code;
    const short = await getShort({ code });
    if (!short) return { notFound: true };
    await clickShort({ code });
    return {
        redirect: {
            destination: short.target,
            permanent: false,
        }
    }
}
