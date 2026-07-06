const requiredPublicEnv = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
  "NEXT_PUBLIC_SUBMIT_EMAIL",
  "NEXT_PUBLIC_SUBMIT_FORM_URL",
];

const placeholderPatterns = [
  /your-domain\.com/i,
  /example\.com/i,
  /your-form-id/i,
  /^https:\/\/forms\.gle\/?$/i,
  /^submit@example\.com$/i,
];

function isPlaceholderValue(value) {
  if (!value) {
    return true;
  }

  return placeholderPatterns.some((pattern) => pattern.test(value));
}

const invalidEntries = requiredPublicEnv
  .map((name) => ({ name, value: process.env[name] }))
  .filter(({ value }) => isPlaceholderValue(value));

if (invalidEntries.length > 0) {
  console.warn("\n[check-env] Production environment warning:");
  console.warn("[check-env] These public env vars are missing or still look like .env.example placeholders:");

  for (const { name, value } of invalidEntries) {
    console.warn(`  - ${name}: ${value ? `"${value}"` : "(not set)"}`);
  }

  console.warn("[check-env] Build will continue. Set real values in Vercel before public launch.\n");
}
