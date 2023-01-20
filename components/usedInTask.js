import Link from 'next/link';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function UsedInTasks({tasks}) {   

    return (
        <>
            <Divider></Divider>        
            {tasks.map(({name, trader, wikiLink, minPlayerLevel}) => (
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Link href={wikiLink}>{name} - {trader.name} [{minPlayerLevel}]</Link>
                </Typography>
            ))}
        </>
    );
}
