import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className='logo'>
            <Link to='/'>
                <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/072dca8a-cd05-441f-9642-fe6803161399/logo-original.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210129T184000Z&X-Amz-Expires=86400&X-Amz-Signature=f6f1b675ea426c14d5d43e3830ec57178170c20f862faa4ae0e692486e379ddb&X-Amz-SignedHeaders=host' alt='logo' />
            </Link>
        </div>
    )
}