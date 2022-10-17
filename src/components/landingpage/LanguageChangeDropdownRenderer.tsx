import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useState } from "react";
import Box from "@mui/material/Box";

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
        locale: nextLocale,
      })
      .then((_) => setLanguage(nextLocale));
  };

  return (
    <Box>
      <FormControl>
        <Select
          value={language}
          onChange={(event) =>
            handleLanguageChange(event.target.value as string)
          }
        >
          {router.locales?.map((locale) => (
            <MenuItem key={locale} value={locale.toLowerCase()}>
              {locale.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
