/**
 * SurveyWizard is superseded by the dedicated /survey/[type] page flow.
 * This shim is kept so any remaining imports don't break.
 * The estimate page now renders <ProjectTypeSelect /> directly, which
 * navigates to /survey/[type] on card click.
 */
export { ProjectTypeSelect as SurveyWizard } from "./ProjectTypeSelect";
