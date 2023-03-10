import { useState } from 'react';

import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

/**
 * Created By: Rupan Chaulagain
 * Date: 2022-10-13
 * Time: 21:38
 * Project: formintegratorwebapp
 * Organization: Sireto Technology
 */

export default function LanguageChangeDropdownRenderer() {
    const router = useRouter();

    const [language, setLanguage] = useState(router.locale);

    const handleLanguageChange = (nextLocale: string) => {
        router
            .push({ pathname: router.pathname, query: router.query }, router.asPath, {
                locale: nextLocale
            })
            .then((_) => setLanguage(nextLocale));
    };

    return (
        <Box
            sx={{
                boxShadow: 'none',
                '.MuiOutlinedInput-notchedOutline': { border: 0, paddingTop: 0, paddingBottom: 0 },
                '.Mui-focused': { border: 0 },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '0'
                }
            }}
        >
            <Select value={language} onChange={(event) => handleLanguageChange(event.target.value as string)}>
                {router.locales?.map((locale) => (
                    <MenuItem key={locale} value={locale.toLowerCase()}>
                        {locale.toUpperCase()}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}
