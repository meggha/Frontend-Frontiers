import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BookIcon from '@mui/icons-material/Book';
import FeedIcon from '@mui/icons-material/Feed';
import DashboardIcon from '@mui/icons-material/Dashboard';

const NAVIGATION = [
  {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'tutorials',
    title: 'Tutorials',
    icon: <FeedIcon />,
  },
  {
    segment: 'reference',
    title: 'Reference',
    icon: <BookIcon />,
  },
  {
    segment: 'articles',
    title: 'Articles',
    icon: <ArticleIcon />,
  },
  {
    segment: 'forums',
    title: 'Forums',
    icon: <RateReviewIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function ToolbarActionsSearch() {
    return (
      <Stack direction="row">
        <Tooltip title="Search" enterDelay={1000}>
          <div>
            <IconButton
              type="button"
              aria-label="search"
              sx={{
                display: { xs: 'inline', md: 'none' },
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Tooltip>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <IconButton type="button" aria-label="search" size="small">
                  <SearchIcon />
                </IconButton>
              ),
              sx: { pr: 0.5 },
            },
          }}
          sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
        />
        <ThemeSwitcher />
      </Stack>
    );
  }
  
  function SidebarFooter({ mini }) {
    return (
      <Typography
        variant="caption"
        sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
        {mini ? '©' : (
            <>
                <span>© cplusplus.com</span> <br />
                <span>2020-2023, All rights reserved - v3.3.4s</span>
            </>
        )}
      </Typography>
    );
  }

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://styles.redditmedia.com/t5_2qh6x/styles/communityIcon_xgorujtjrj571.png" alt="C++ logo" />,
        title: 'Cplusplus.com',
        homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
      slots={{
        //appTitle: CustomAppTitle,
        toolbarActions: ToolbarActionsSearch,
        sidebarFooter: SidebarFooter,
      }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBranding.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
  
